import { render } from '@testing-library/react';

import App12component7 from './app12component7';

describe('App12component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component7 />);
    expect(baseElement).toBeTruthy();
  });
});
