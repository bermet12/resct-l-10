import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //тест для текста
  const caption = screen.getByText(/lesson 10/i);
  //тест для кнопки
  const btn = screen.getByRole('button');
  //тест для input
  const input = screen.getByPlaceholderText(/your opinion/i);


  expect(caption).toBeInTheDocument();
  expect(btn).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});
