import { useParams } from "react-router-dom";

const ErrorPage = () => {

  const { code } = useParams();

  return (
    <div>
      ErrorPage {code}
    </div>
  )
}

export default ErrorPage;
