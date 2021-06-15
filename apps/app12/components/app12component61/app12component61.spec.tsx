import { render } from '@testing-library/react';

import App12component61 from './app12component61';

describe('App12component61', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component61 />);
    expect(baseElement).toBeTruthy();
  });
});
