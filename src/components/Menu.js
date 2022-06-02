function Menu({menu=0, onClickMenu}) {
    return <ul className="menu_list">
    <li onClick={() => onClickMenu(0)}>
        <div className={menu===0? 'active':''}>Sumario</div>
    </li>
    <li onClick={() => onClickMenu(1)}>
        <div className={menu===1? 'active':''}>Dia</div>
    </li>
    <li onClick={() => onClickMenu(2)}>
        <div className={menu===2? 'active':''}>Fases</div>
    </li>
   
</ul>
}

export default Menu;