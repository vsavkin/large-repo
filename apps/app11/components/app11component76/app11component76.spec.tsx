import { render } from '@testing-library/react';

import App11component76 from './app11component76';

describe('App11component76', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component76 />);
    expect(baseElement).toBeTruthy();
  });
});
