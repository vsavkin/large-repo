import { render } from '@testing-library/react';

import App11component3 from './app11component3';

describe('App11component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component3 />);
    expect(baseElement).toBeTruthy();
  });
});
