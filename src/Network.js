import ItemsRow from "./ItemsRow";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.img`
    width: 50px;
    margin-top: 10px;
`;

const logos = {
    MTN: "mtn.png",
    Airtel: "airtel.png",
    Glo: "glo.png",
    NineMobile: "mobile.png",
};

const Network = ({ network }) => {
    const plan = ["Data", "Airtime"];
    const navigate = useNavigate();

    return (
        <>
            <Logo src={logos[network]} alt={network} />

            {plan.map((Item, index) => (
                <ItemsRow
                    key={index}
                    items={[Item]}
                    onClick={() =>
                        navigate(`./${Item.toLowerCase()}plan`, {
                            state: { network: network },
                        })
                    }
                />
            ))}
        </>
    );
};

export default Network;
