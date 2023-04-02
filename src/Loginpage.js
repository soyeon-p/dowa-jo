import { useNavigate } from "react-router-dom";
const Loginpage = () => {
  const navigate = useNavigate();
  const Main = () => {
    navigate("/");
  };
  const Register = () => {
    navigate("/Select");
  };
  return (
    <div>
      <h2>로그인</h2>
      <br></br>
      <label>이메일</label>
      <input id="email" type="email"></input>
      <br></br>

      <label>비밀번호</label>
      <input id="pw" type="password"></input>
      <br></br>

      <br></br>
      <button onClick={Main}>로그인</button>
      <br></br>
      <button onClick={Register}>회원가입</button>
    </div>
  );
};
export default Loginpage;
