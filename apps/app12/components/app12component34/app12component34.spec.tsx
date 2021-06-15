import { render } from '@testing-library/react';

import App12component34 from './app12component34';

describe('App12component34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component34 />);
    expect(baseElement).toBeTruthy();
  });
});
