import { useNavigate } from "react-router-dom";
const main = {
  border: "1px solid black",
  backgroundColor: "grey",
  margin: "auto",
  width: "625px",
  height: "200px",
  position: "relative",
};
const box = {
  border: "1px solid black",
  backgroundColor: "white",
  margin: "auto",
  width: "200px",
  height: "60px",
  borderRadius: "10px",
  position: "relative",
  marginLeft: "5px",
};

const Mainpage = () => {
  const navigate = useNavigate();
  const Login = () => {
    navigate("/Loginpage");
  };
  const Register = () => {
    navigate("/Select");
  };
  const Mp1 = () => {
    navigate("/Mypage1");
  };
  const Mp2 = () => {
    navigate("/Mypage2");
  };
  const Reserve = () => {
    navigate("/Reserve");
  };

  return (
    <div style={main}>
      <button style={{ marginLeft: "460px" }} onClick={Login}>
        로그인
      </button>

      <button onClick={Register}>회원가입</button>

      <hr></hr>
      <button onClick={Reserve} style={box}>
        <button
          onClick={Reserve}
          style={{
            width: "50px",
            height: "50px",
            marginRight: "50px",
            borderRadius: "50%",
          }}
        >
          사진
        </button>
        상담사a
      </button>
      <button onClick={Reserve} style={box}>
        {" "}
        <button
          style={{
            width: "50px",
            height: "50px",
            marginRight: "50px",
            borderRadius: "50%",
          }}
        >
          사진
        </button>
        상담사b
      </button>
      <button onClick={Reserve} style={box}>
        {" "}
        <button
          style={{
            width: "50px",
            height: "50px",
            marginRight: "50px",
            borderRadius: "50%",
          }}
        >
          사진
        </button>
        상담사c
      </button>
      <button onClick={Reserve} style={box}>
        {" "}
        <button
          style={{
            width: "50px",
            height: "50px",
            marginRight: "50px",
            borderRadius: "50%",
          }}
        >
          사진
        </button>
        상담사d
      </button>
      <button onClick={Reserve} style={box}>
        {" "}
        <button
          style={{
            width: "50px",
            height: "50px",
            marginRight: "50px",
            borderRadius: "50%",
          }}
        >
          사진
        </button>
        상담사e
      </button>
      <button onClick={Reserve} style={box}>
        {" "}
        <button
          style={{
            width: "50px",
            height: "50px",
            marginRight: "50px",
            borderRadius: "50%",
          }}
        >
          사진
        </button>
        상담사f
      </button>
    </div>
  );
};
export default Mainpage;
