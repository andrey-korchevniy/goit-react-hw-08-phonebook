import { SpinnerStyle } from './Spinner.styled';
import { MutatingDots } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <SpinnerStyle>
      <MutatingDots color="#0591ba" height={100} width={100} />
    </SpinnerStyle>
  );
};
