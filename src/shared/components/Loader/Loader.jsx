import { ThreeDots } from 'react-loader-spinner';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const Loader = () => {
  return (
    <div style={style}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#3c9af1"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};
export default Loader;
