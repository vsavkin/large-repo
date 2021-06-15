import { render } from '@testing-library/react';

import App12component41 from './app12component41';

describe('App12component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component41 />);
    expect(baseElement).toBeTruthy();
  });
});
