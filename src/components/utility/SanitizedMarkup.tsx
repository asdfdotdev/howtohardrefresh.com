import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';

interface RichTextProps {
  htmlContent: string;
}

export function SanitizedMarkup({ htmlContent }: RichTextProps) {
  const sanitizedMarkup = DOMPurify.sanitize(htmlContent);
  return <>{parse(sanitizedMarkup)}</>;
}
