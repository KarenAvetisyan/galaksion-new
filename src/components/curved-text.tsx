type Props = {
  text: string;
  objectSize?: number;
  spacing?: number;
  offset?: number;
  overlap?: boolean;
};

export const CurvedText = ({
  text,
  objectSize = 120,
  spacing = 12,
  offset = 30,
  overlap = false,
}: Props) => {
  const d = objectSize + spacing * 2;
  const r = objectSize / 2 + spacing / 2;

  return (
    <div
      className=""
      style={{
        marginBottom: overlap ? `-${r}px` : '0',
        width: d + offset * 2,
        height: r + offset,
      }}
    >
      <svg viewBox={`0 0 ${d + offset * 2} ${r + offset * 2}`}>
        <path
          id="curve"
          fill="none"
          d={`M${offset},${r + offset} A${r},${r} 0 0,1 ${d + offset},${r + offset}`}
        />
        <text width="500" fill="currentColor" textAnchor="middle">
          <textPath xlinkHref="#curve" startOffset="50%" className="text-2xl font-bold">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};
