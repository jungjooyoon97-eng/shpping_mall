import { Link } from "react-router-dom";
import api from "../api/api";
import { useEffect, useState } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    // 검색 키워드 상태 관리 
    const [searchKeyword, setSearchKeyword] = useState("");

    // db에서 데이터 가져오기
    useEffect(() => {
        const fetchProducts = async () => {
            try{
                //'http://localhost:8000/api/products'
                const response = await api.get('/products');
                if (!Array.isArray(response.data)) {
                    throw new Error("상품 목록 응답 형식이 올바르지 않습니다.");
                }
                setProducts(response.data) // data 속성 불러줌
            }catch(error){
                console.error("상품 목록 조회 에러: ", error);
                setErrorMessage("상품 목록을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.");
            }finally{
                setLoading(false);
            }
        }
        fetchProducts();  //함수 호출해야 실행됨
    }, []); //최초 1번 렌더링

    // 검색된 상품(목록) 필터링 구현
    const filterProducts = products.filter(product => 
        product.product_name.toLowerCase().includes(searchKeyword.toLocaleLowerCase())
    )

    return(
        <div className="product-list">
            {loading && <p role="status">상품 목록을 불러오는 중입니다.</p>}
            {errorMessage && <p role="alert">{errorMessage}</p>}
            {!loading && !errorMessage && products.length === 0 && (
                <p>등록된 상품이 없습니다.</p>
            )}
            {/* 검색 기능 */}
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="상품명으로 검색"
                    onChange={(e) => setSearchKeyword(e.target.value)}
                />
            </div>
            {/* 상품 목록 */}
            <table>
                <thead>
                    <tr>
                        <th>번호</th><th>상품명</th><th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {filterProducts.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>
                                <Link to={`/products/${product.id}`}>{product.product_name}</Link>
                            </td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="btn-add">
                <Link to="/products/new">
                    <button type="button">상품 등록</button>   
                </Link> 
            </div>
        </div>
    )
}

export default ProductList;
