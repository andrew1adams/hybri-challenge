import { Button } from 'components';
import { Container } from './style';
import { TiWavesOutline } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import { BsBoxArrowInLeft } from 'react-icons/bs';
import Channels from './Channels';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from 'store/slices/user';
import { handleBehaviorMenu } from 'store/slices/menu';

const Sidebar = () => {
  const { user, menu } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userLogout());
    navigate('/');
  };

  const handleMenuButton = () => {
    dispatch(handleBehaviorMenu(!menu.open));
  };

  return (
    <Container menuOpen={menu.open}>
      <div className="content-wrapper">
        <header>
          <h2>
            <TiWavesOutline size="32" />
            SeaChat
          </h2>
          <span>
            Hello welcome,
            <br /> {user.email}.
          </span>
        </header>
        <Channels />
        <footer>
          <Button onClick={handleLogout}>
            <BsBoxArrowInLeft size="24" fill="#fff" />
            Logout
          </Button>
          <span>
            All rights reserved by{' '}
            <a
              href="https://www.linkedin.com/in/andrew-adams-718419210/"
              target="_blank"
              rel="noreferrer"
            >
              Andrew Adams
            </a>
            .
          </span>
        </footer>
      </div>
      <div className="menu-wrapper" onClick={handleMenuButton}>
        <div className="menu" />
      </div>
    </Container>
  );
};

export default Sidebar;
