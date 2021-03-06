import * as React from "react";

interface Props {
  isAvailable: boolean;
  title: string;
  description: string;
  isActive: boolean;
  onClick: (evt: React.MouseEvent) => void;
}

const CardStatus:React.FunctionComponent<Props> = (props: Props) => {
  const {isAvailable, title, description, isActive, onClick} = props;

  let statusText = <></>;

  if (isAvailable) {
    statusText = isActive
      ? <>{description}</>
      : <>Чего сидишь? Порадуй котэ, <a onClick={onClick} className="card__link" href="">купи.</a></>;
  } else {
    statusText = <>{`Печалька, ${title} закончился.`}</>;
  }

  return (
    <p className={isAvailable ? `card__status` : `card__status card__status--not-available`}>{statusText}</p>
  );
};

export default CardStatus;
