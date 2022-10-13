import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../reducers/dark';
import Image from 'next/image';
import DarkStatus from './DarkStatus';
import styles from '../styles/Home.module.css';

function Home() {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.dark.value);

  let style = {};
  let mode = '';
  if (dark) {
    style = { 'backgroundColor': 'black' };
    mode = 'dark';
  } else {
    mode = 'light';
  }

  return (
    <div className={styles.container} style={style}>
      <Image src={`/${mode}.png`} alt={mode} width={128} height={128} onClick={() => dispatch(toggle())} id="switch" className={styles.switch} />
      <DarkStatus />
    </div>
  );
}

export default Home;
