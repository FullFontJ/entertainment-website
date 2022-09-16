export function Menu() {
  return (
    <>
      <header>
        <nav className="flex flex-nowrap gap-4 text-lg justify-around pt-4 pb-4 text-colorWhite bg-boulder">
          <div className="basis-1/12">
            <spa className="font-light">cd project red</spa>
          </div>

          <ButtonNav classTail="basis-1/12 font-normal" name="Games" />
          <ButtonNav classTail="basis-1/12 font-normal" name="Support" />
          <ButtonNav classTail="basis-1/12 font-normal" name="News" />
          <ButtonNav classTail="basis-1/12 font-normal" name="Jobs" />
          <ButtonNav classTail="basis-1/12 font-normal" name="Press" />
          <ButtonNav classTail="basis-1/12 font-normal" name="About" />
          <ButtonNav classTail="basis-1/12 font-medium" name="Store" />
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
