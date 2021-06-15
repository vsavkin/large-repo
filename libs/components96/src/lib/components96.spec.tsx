import { render } from '@testing-library/react';

import Components96 from './components96';

describe('Components96', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components96 />);
    expect(baseElement).toBeTruthy();
  });
});
