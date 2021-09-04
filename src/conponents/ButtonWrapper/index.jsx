import { Grid, Row } from "./styles"
import Button from "../Button"
import BackIcon from "../../assets/icon/undo.svg"

const ButtonWrapper = () => (
    <Grid>
        <Row>
            <Button type="primary">AC</Button>
            <Button type="primary">+/-</Button>
            <Button type="primary">%</Button>
            <Button type="primary">&divide;</Button>
        </Row>

        <Row>
            <Button type="number">7</Button>
            <Button type="number">8</Button>
            <Button type="number">9</Button>
            <Button type="primary">&times;</Button>
        </Row>

        <Row>
            <Button type="number">4</Button>
            <Button type="number">5</Button>
            <Button type="number">6</Button>
            <Button type="primary">-</Button>
        </Row>

        <Row>
            <Button type="number">1</Button>
            <Button type="number">2</Button>
            <Button type="number">3</Button>
            <Button type="primary">+</Button>
        </Row>

        <Row>
            <Button type="number">
                <img src={BackIcon} alt="backspace" />
            </Button>
            <Button type="number">0</Button>
            <Button type="number">.</Button>
            <Button type="secondary">=</Button>
        </Row>
    </Grid>
)

export default ButtonWrapper