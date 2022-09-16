export function Menu() {
  return (
    <>
      <header>
        <nav className="flex flex-nowrap gap-4 text-lg justify-around mt-4 mb-4">
          <div className="basis-1/12">
            <span className="rounded-full bg-slate-900 text-white font-semibold">m</span>
            <spa className="font-semibold">metacritic</spa>
          </div>

          <ButtonNav classTail="basis-1/12 font-normal" name="Game" />
          <ButtonNav classTail="basis-1/12 font-normal" name="Movies" />
          <ButtonNav classTail="basis-1/12 font-normal" name="TV" />
          <ButtonNav classTail="basis-1/12 font-normal" name="Music" />
          <input
            className="basis-3/12 rounded-md bg-alto text-silverChalice border-transparent"
            placeholder="Search among media titles..."
          ></input>
          <ButtonNav
            classTail="basis-1/12 px-6 rounded-md bg-sunglow font-medium"
            name="Sign up"
          />
          <ButtonNav
            classTail="basis-1/12 px-6 rounded-md border-2 border-black font-medium"
            name="Login"
          />
        </nav>
      </header>
    </>
  );
}

const ButtonNav = ({ name, link, classTail }) => {
  return (
    <a className={classTail} href={link}>
      {name}
    </a>
  );
};
