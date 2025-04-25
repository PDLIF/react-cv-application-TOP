
function GeneralInfoPrint({ fullName, email, phone, adress }) {
    return(
        <div className="general-info flex br-10">
            <h1 className="name">{fullName}</h1>
            <div className="flex other-info">
                {email && (
                    <div>
                        <i className="fa-solid fa-envelope" />
                        <span>{email}</span>
                    </div>
                )}

                {phone && (
                    <div>
                        <i className="fa-solid fa-phone" />
                        <span>{phone}</span>
                    </div>
                )}

                {adress && (
                    <div>
                        <i className="fa-solid fa-location-dot" />
                        <span>{adress}</span>
                    </div>
                )}
            </div>
        </div>
    );
}
export default GeneralInfoPrint;