import React, { useState } from 'react';
import api from '../api/axios';

function Login({ onLoginSuccess }) {
  const [formData, setFormData] = useState({
    userId: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await api.post('/api/users/login', formData);

      const { access_token, refresh_token } = response.data;
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);

      console.log('로그인 성공!');
      onLoginSuccess();
    } catch (error) {
      console.log('로그인 실패: ', error);
      setError('로그인에 실패했습니다. 정보를 확인해주세요.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div>
      <h2>축제 로그인</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>아이디: </label>
          <input type="text" name='userId' value={formData.userId} onChange={handleChange} required placeholder="예: 2026111111" />
        </div>
        <div>
          <label>비밀번호: </label>
          <input type='password' name='password' value={formData.password} onChange={handleChange} required placeholder='예: 01012341234' />
        </div>
        <button type='submit' disabled={loading}>
          {loading ? '로그인 중...' : '로그인'}
        </button>
      </form>
    </div>
  );
}

export default Login;