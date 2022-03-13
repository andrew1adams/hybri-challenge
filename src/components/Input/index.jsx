import { Container } from './style';

const Input = ({ label, type = 'text', handleState, value }) => {
  const handleInputChange = ({ target }) => {
    const value = target.value;
    const name = target.name;

    handleState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container>
      <input
        name={label}
        id={label}
        type={type}
        value={value}
        onChange={handleInputChange}
        autoComplete="off"
        placeholder={'Insert your ' + label}
        min={3}
      />
      <label htmlFor={label}>{label}</label>
    </Container>
  );
};

export default Input;
