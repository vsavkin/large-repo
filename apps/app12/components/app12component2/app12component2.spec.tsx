import { render } from '@testing-library/react';

import App12component2 from './app12component2';

describe('App12component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component2 />);
    expect(baseElement).toBeTruthy();
  });
});
