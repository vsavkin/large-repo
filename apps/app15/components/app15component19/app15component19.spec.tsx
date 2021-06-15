import { render } from '@testing-library/react';

import App15component19 from './app15component19';

describe('App15component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component19 />);
    expect(baseElement).toBeTruthy();
  });
});
