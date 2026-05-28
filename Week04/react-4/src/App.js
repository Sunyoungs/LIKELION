import './App.css';

function App() {

  const name = "아기사자";
  const age = 23;
  const hobbies = ['코딩하기', '책읽기', '영화보기']
  const greet = () => {
    alert(`${name}의 페이지에 오신 것을 환영합니다!🎉`);
  };
  const mbti = () => {
    alert(`저의 MBTI는 ENFP입니다.`);
  };

  return (
    <div>
      <div style={{
        padding: '50px',
        fontFamily: 'Prentendard, sans-serif',
        backgroundColor: '#f7f9fc',
        borderRadius: '12px',
        maxWidth: '600px',
        margin: '40px auto',
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#ee9014', marginBottom: '20px' }}>안녕하세요, 저는 {name}입니다!</h1>
        <p style={{ fontSize: '18px', color: '#555' }}>저는 {age}살이며, 프론트엔드 개발자를 꿈꾸고 있습니다!</p>
        {age >= 20 ? (
          <p style={{ color: '#3cb371', fontWeight: 'bold' }}>저는 서울여자대학교 대학생입니다.</p>
        ) : (
          <p style={{ color: '#ff6347', fontWeight: 'bold' }}>저는 서울여자대학교 대학생을 꿈꾸고 있습니다.</p>
        )}
        <h3 style={{ color: '#333', marginTop: '30px' }}>🛠️ 제 취미를 소개합니다.</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {hobbies.map((hobby, index) => (
            <li key={index} style={{ 
              padding: '8px 16px',
              margin: '8px auto',
              backgroundColor: '#fff',
              borderRadius: '20px',
              bosShadow: '0 2px 6px rgba(0,0,0,0.1)',
              width: 'fit-content'
            }}>
              {hobby}
            </li>
          ))}
        </ul>
        <button onClick={greet} style={{ 
          marginTop: '30px',
          padding: '12px 24px',
          backgroundColor: '#4a90e2',
          color: '#fff',
          borderRadius: '25px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          boxShadow: '0 4px 8px rgba(74,144,226,0.3)'
        }}>🎉 환영 인사 보기</button>
        <br></br>
        <button onClick={mbti} style={{
          marginTop: '30px',
          padding: '12px 24px',
          backgroundColor: '#4a51e2',
          color: '#fff',
          borderRadius: '25px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          boxShadow: '0 4px 8px rgba(74,144,226,0.3)'
        }}>🧠 MBTI 보기</button>
      </div>
      <div style={{
      padding: '50px',
      fontFamily: 'Prentendard, sans-serif',
      backgroundColor: '#f7f9fc',
      borderRadius: '12px',
      maxWidth: '600px',
      margin: '40px auto',
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    }}>
      <h2>👤 프로필</h2>
      <p>이름: 아기사자</p>
      <p>나이: 23살</p>
      <p>목표: 프론트엔드 개발자</p>
    </div>
    <div style={{
      padding: '50px',
      fontFamily: 'Prentendard, sans-serif',
      backgroundColor: '#f7f9fc',
      borderRadius: '12px',
      maxWidth: '600px',
      margin: '40px auto',
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    }}>
      <h2>🎓 학교</h2>
      <p>학교: 서울여자대학교</p>
      <p>전공: 정보보호학과</p>
      <p>학년: 4학년</p>
    </div>
    <div style={{
      padding: '50px',
      fontFamily: 'Prentendard, sans-serif',
      backgroundColor: '#f7f9fc',
      borderRadius: '12px',
      maxWidth: '600px',
      margin: '40px auto',
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    }}>
      <h2>🎯 취미</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {hobbies.map((hobby, index) => (
          <li key={index} style={{ 
            padding: '8px 16px',
            margin: '8px auto',
            backgroundColor: '#fff',
            borderRadius: '20px',
            bosShadow: '0 2px 6px rgba(0,0,0,0.1)',
            width: 'fit-content'
          }}>
            {hobby}
          </li>
        ))}
      </ul>
    </div>
    <div style={{
      padding: '50px',
      fontFamily: 'Prentendard, sans-serif',
      backgroundColor: '#f7f9fc',
      borderRadius: '12px',
      maxWidth: '600px',
      margin: '40px auto',
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    }}>
      <h2>❓ 미니 인터뷰</h2>
      <p>Q. 어떤 개발자가 되고싶나요?</p>
      <p style={{ color: '#92bcf7' }}>A. 사용자 경험을 잘 이해하는 따뜻한 개발자가 되고 싶어요.</p>
    </div>
    </div>
  );
}

export default App;
