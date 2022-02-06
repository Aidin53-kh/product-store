import { isEmpty } from "lodash";
import { useSelector } from "react-redux";

import Error401 from "../../pages/errors/401";
import { State } from "../../store";
import { User } from "../../store/user/types";

const LoginRequire: React.FC = ({ children }) => {
    const user = useSelector<State, User >((state) => state.user);
    return isEmpty(user) ? <Error401 /> : <>{children}</>
}

export default LoginRequire;
