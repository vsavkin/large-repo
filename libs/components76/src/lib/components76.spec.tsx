import { render } from '@testing-library/react';

import Components76 from './components76';

describe('Components76', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components76 />);
    expect(baseElement).toBeTruthy();
  });
});
