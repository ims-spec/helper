import React, { useState } from 'react';
import  supabase  from '../../providers/supabase';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Функция для входа
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      alert('Вы успешно вошли!');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Функция для регистрации
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;
      alert('Проверьте вашу почту для подтверждения регистрации!');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Функция для выхода
  const handleLogout = async () => {
    await supabase.auth.signOut();
    alert('Вы вышли из системы.');
  };

  return (
    <div>
      <h2>Авторизация</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Загрузка...' : 'Войти'}
        </button>
        <button type="button" onClick={handleSignUp} disabled={loading}>
          {loading ? 'Загрузка...' : 'Зарегистрироваться'}
        </button>
      </form>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
};

export default Auth;