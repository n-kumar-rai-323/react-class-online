import NotFound from "../components/NotFound/NotFound.component"
import { useNavigate } from "react-router-dom"
function PageNotFound() {
    const navigate = useNavigate()

    return (
        <NotFound error_code="404" title="Page Not Found" message="Sorry, the page you are looking for does not exist." buttonText="Go Home" onButtonClick={() => navigate("/")} />

    )
}
export default PageNotFound