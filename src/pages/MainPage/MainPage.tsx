import { Link, Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>MainPage</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eveniet nulla non eum est deserunt amet deleniti eius minima enim dolores vel fuga totam voluptatum a, dicta cupiditate atque ratione?
      Vel, culpa harum mollitia tempora consequatur suscipit? Temporibus reiciendis sint deserunt, similique laboriosam labore? Perspiciatis libero rerum praesentium ducimus voluptatem voluptatum cupiditate illo veniam inventore expedita eius repudiandae, illum provident?
      Quaerat, laboriosam! Amet nulla atque illum adipisci blanditiis minima necessitatibus labore. Quidem sunt necessitatibus perferendis asperiores, facere, aliquid ab voluptatem nostrum assumenda sapiente ullam non, magnam quas mollitia officiis quibusdam.</p>
      <ul className='menu'>
        <li><Link to={'achievements'}>achievements</Link></li>
        <li><Link to={'contact'}>contact</Link></li>
      </ul>
      <Outlet />
    </div>
  )
}

export default MainPage;
