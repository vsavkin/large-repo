import { render } from '@testing-library/react';

import App11component21 from './app11component21';

describe('App11component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component21 />);
    expect(baseElement).toBeTruthy();
  });
});
