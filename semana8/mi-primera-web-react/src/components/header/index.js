const header = (props) => {
    const { nombre } = props;

    return (
        <div>
            <ul>
                <li>inicio</li>
                <li>Contacto</li>
                <li>Nosotros</li>
                <li>Ayuda</li>
                <li>{nombre}</li>
            </ul>
        </div>
    );
};

export default Header;
