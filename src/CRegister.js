import { useNavigate } from "react-router-dom";
const CRegister = () => {
  const navigate = useNavigate();
  const CRegi = () => {
    navigate("/Cpage");
  };
  return (
    <div>
      <h2>상담사 회원가입</h2>
      <br></br>
      <label>이름</label>
      <input id="name" type="name"></input>
      <br></br>
      <label>아이디</label>
      <input id="email" type="email"></input>
      <br></br>
      <label>비밀번호</label>
      <input id="pw" type="password"></input>
      <br></br>
      <label>생년월일</label>
      <input id="birth" type="date"></input>
      <br></br>

      <br></br>
      <button onClick={CRegi}>회원가입 완료</button>
    </div>
  );
};
export default CRegister;
