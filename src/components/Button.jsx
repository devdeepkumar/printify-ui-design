const Button = ({ text ,bg}) => {
  return (
    <button className={`${bg} border border-gray-300 font-semibold px-4 py-[.3rem] rounded-[.2rem]`}>
      {text}
    </button>
  );
};

export default Button;
