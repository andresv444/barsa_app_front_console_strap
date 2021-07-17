import ButtonComponent from 'components/Button/ButtonComponent';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const TextBlock = ({ id, title, titlecolor, subtitle, content, buttons }) => (
  <>
    <div key={id}>
      {!!title && (
        <h2 className={!!titlecolor ? `title text-${titlecolor}` : 'title'}>{title}</h2>
      )}
      {!!subtitle && <h4>{subtitle}</h4>}
      {!!content && <ReactMarkdown>{content}</ReactMarkdown>}
      {Array.isArray(buttons) &&
        buttons.length > 0 &&
        buttons.map((button, key) => (
          <ButtonComponent
            key={key}
            id={button.id}
            title={button.title}
            href={button.href}
            icon={button.icon}
            color={button.color}
            style={button.style}
            size={button.size}
          />
        ))}
    </div>
  </>
);

export default TextBlock;
