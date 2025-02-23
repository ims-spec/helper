import supabase from "../../supabase";

export default function FooterBar() {
  const logoutHandler = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      <ul className="nav flex-column mb-auto">
        <li className="nav-item">
          <a className="nav-link d-flex align-items-center gap-2" href="#">
            <i className="bi bi-gear-wide-connected"></i>
            Settings
          </a>
        </li>
        <li className="nav-item">
          <button
            className="nav-link d-flex align-items-center gap-2"
            onClick={logoutHandler}
          >
            <i className="bi bi-door-closed"></i>
            Sign out
          </button>
        </li>
      </ul>
    </>
  );
}
