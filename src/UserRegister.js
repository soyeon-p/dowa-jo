import { useNavigate } from "react-router-dom";
const UserRegister = () => {
  const navigate = useNavigate();
  const Register = () => {
    navigate("/Upage");
  };
  return (
    <div>
      <h2>내담자 회원가입</h2>
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
      <label>별명</label>

      <input id="nickname" type="name"></input>
      <br></br>
      <button onClick={Register}>회원가입 완료</button>
    </div>
  );
};
export default UserRegister;
