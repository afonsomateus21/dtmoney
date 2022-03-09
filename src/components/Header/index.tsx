import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface ModalProps {
  onOpenNewModalTransaction: () => void;
}

export function Header({ onOpenNewModalTransaction } : ModalProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewModalTransaction}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}