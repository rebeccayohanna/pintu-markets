import {ReactComponent as ArrowUp} from '../../assets/icons/arrow-up.svg';
import {ReactComponent as ArrowDown} from '../../assets/icons/arrow-down.svg';

const TokenPercentages = ({ percentage }) => (
  <div className="flex flex-row items-center justify-center sm:justify-right gap-1">
    {Number(percentage) > 0 && <ArrowUp className="w-3 h-4 fill-emerald-500" />}
    {Number(percentage) < 0 && <ArrowDown className="w-3 h-4 fill-red-500" />}
    <p
      className={`text-sm font-semibold ${
        Number(percentage) > 0
          ? 'text-green-500'
          : Number(percentage) < 0
          ? 'text-red-500'
          : 'text-black'
      }`}
    >
      {Math.abs(percentage) || ' 0.00'}%
    </p>
  </div>
)

export default TokenPercentages;
