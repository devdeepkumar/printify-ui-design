const SubFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <img
        src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?t=st=1726935844~exp=1726936444~hmac=94b7aa5d94c6d7bfd7354e12942bbb206587071706a43b400ce204efae8b3767"
        alt=""
        className="text-green-500 w-10 fixed bottom-10 max-sm:left-5 left-10 rounded-full  border-gray-800 border-2"
      />
      <div className="flex justify-center space-x-6 mt-4 max-sm:flex-wrap">
        <a href="#" className="text-gray-400 hover:text-white">
          Intellectual Property Policy
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          Terms of Service
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          Privacy Policy
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          Security
        </a>
      </div>
      <p>© 2024 Printify, Inc. All rights reserved.</p>
    </footer>
  );
};
export default SubFooter;
