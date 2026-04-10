'use client';

import { useEffect, useMemo, useState } from 'react';

type AnchorItem = {
  id: string;
  label: string;
};

type Props = {
  content: React.ReactNode;
};

export const PolicyAndTermsAnchors = ({ content }: Props) => {
  const [activeId, setActiveId] = useState<string>('');

  //  Extract anchors dynamically
  const anchors = useMemo(() => {
    const result: AnchorItem[] = [];

    const walk = (node: any) => {
      if (!node) return;

      if (Array.isArray(node)) {
        node.forEach(walk);
        return;
      }

      if (node?.props) {
        // Check if it's SectionHeadline with id
        if (node.props.id) {
          const getText = (node: any): string => {
            if (typeof node === 'string') return node;
            if (Array.isArray(node)) return node.map(getText).join('');
            if (node?.props?.children) return getText(node.props.children);
            return '';
          };

          const rawLabel = node.props.label ?? getText(node.props.children);
          const cleanLabel = rawLabel.replace(/^\s*\d+[\.\)]\s*/, '');

          result.push({
            id: node.props.id,
            label: cleanLabel,
          });
        }

        if (node.props.children) {
          walk(node.props.children);
        }
      }
    };

    walk(content);
    return result;
  }, [content]);

    useEffect(() => {
    const onHashChange = () => {
       const hash = window.location.hash.replace('#', '');
        if (anchors.some((a) => a.id === hash)) {
        setActiveId(hash);
        }
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    useEffect(() => {
    anchors.forEach((item) => {
        const el = document.getElementById(item.id);
        el?.classList.toggle('is-active', item.id === activeId);
    });
    }, [activeId, anchors]);

    useEffect(() => {
        if (!anchors.length) return;

        const hash = window.location.hash.replace('#', '');

        if (hash && anchors.some((a) => a.id === hash)) {
            setActiveId(hash);
        } else {
            setActiveId(anchors[0].id);
        }
    }, [anchors]);

  if (!anchors.length) return null;

  return (
    <nav className="policy-terms-anchors my-7 md:my-10 uppercase">
      <ul className='md:columns-2 gap-x-8 font-medium md:text-xl md:w-[72vw] md:ml-auto tracking-[-0.04em]'>
        {anchors.map((item) => (
          <li key={item.id} className='py-1'>
            <a
                href={`#${item.id}`}
                onClick={(e) => {
                    e.preventDefault();

                    const el = document.getElementById(item.id);
                    if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    }

                    setActiveId(item.id);
                    history.pushState(null, '', `#${item.id}`);
                }}
                className={`w-full rounded-sm inline-flex py-3 px-6 transition-colors
                  ${
                    activeId === item.id
                      ? 'bg-[var(--color-primary)]'
                      : 'bg-secondary hover:bg-[var(--color-primary)]'
                  }
                `}
                >
                {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};