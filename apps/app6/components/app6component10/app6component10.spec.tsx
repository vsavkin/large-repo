import { render } from '@testing-library/react';

import App6component10 from './app6component10';

describe('App6component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component10 />);
    expect(baseElement).toBeTruthy();
  });
});
