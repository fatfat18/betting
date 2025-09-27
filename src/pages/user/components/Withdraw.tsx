import React, { useState } from "react";
import { useFormik } from "formik";
import { FaLock } from "react-icons/fa";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiTether, SiSolana, SiDogecoin } from "react-icons/si";

interface WithdrawProps {
  onWithdraw: (walletAddress: number) => void;
  loading?: boolean;
  error?: string;
  balance?: number;
}

const Withdraw: React.FC<WithdrawProps> = ({ onWithdraw, loading = false, error, balance }) => {
  const [selectedCrypto, setSelectedCrypto] = useState<string>("bitcoin");

  const cryptoOptions = [
    {
      key: "bitcoin",
      label: "Bitcoin",
      icon: FaBitcoin,
      color: "yellow-500",
    },
    {
      key: "ethereum",
      label: "Ethereum",
      icon: FaEthereum,
      color: "blue-600 ",
    },
    {
      key: "tether",
      label: "Tether",
      icon: SiTether,
      color: "green-700 ",
    },
    {
      key: "solana",
      label: "Solana",
      icon: SiSolana,
      color: "red-100",
    },
    {
      key: "dogecoin",
      label: "Dogecoin",
      icon: SiDogecoin,
      color: "yellow-500 ",
    },
  ];
  const formik = useFormik({
    initialValues: { walletAddress: "", password: "", amount: 0 },
    onSubmit: (values) => {
      const walletAddressNum = Number(values.walletAddress);
      if (walletAddressNum > 0) {
        onWithdraw(walletAddressNum);
      }
    },
    validate: (values) => {
      const errors: { walletAddress?: string; password?: string } = {};
      if (!values.walletAddress || Number(values.walletAddress) <= 0) {
        errors.walletAddress = "Enter a valid walletAddress";
      }
      if (!values.password) {
        errors.password = "Password required";
      }
      return errors;
    },
  });

  return (
    <div className="font-host">
      <div className="flex ">
        <div className="mb-4 w-1/3">
          <div className="flex  flex-col gap-2 mt-2">
            {cryptoOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.key}
                  onClick={() => setSelectedCrypto(option.key)}
                  className={`border border-${option.color} ${"text-" + option.color} rounded-xl p-4 cursor-pointer ${
                    selectedCrypto === option.key ? "bg-gradient-to-br from-green-900 to-gray-950 text-white" : ""
                  } flex items-center gap-3`}
                >
                  <Icon size={30} title={option.label} className={``} />
                  <span className="text-sm font-semibold">{option.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-2/3 px-8 font-host ">
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="withdraw-walletAddress">Wallet Address</label>
              <input
                id="withdraw-walletAddress"
                type="text"
                min={1}
                name="walletAddress"
                className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                placeholder="Enter wallet address"
                value={formik.values.walletAddress}
                onChange={formik.handleChange}
                disabled={loading}
                required
              />
              {formik.errors.walletAddress && formik.touched.walletAddress && <div style={{ color: "red" }}>{formik.errors.walletAddress}</div>}
            </div>
            <div className="text-xs mt-1 text-gray-500">Withdrawing balance auto-converts this to the selected cryptocurrency.</div>

            <div className="mt-4">
              <label htmlFor="withdraw-amount">Amount </label>
              <input
                id="withdraw-amount"
                type="text"
                min={1}
                name="amount"
                className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                placeholder="Enter amount"
                value={formik.values.amount}
                onChange={formik.handleChange}
                disabled={loading}
                required
              />
              {formik.errors.amount && formik.touched.amount && <div style={{ color: "red" }}>{formik.errors.amount}</div>}
            </div>
            <div className="text-xs mt-1">
              Available Balance: <span className="font-black text-green-800 ">${balance?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>

            <div className="relative text-black mt-4">
              <label htmlFor="withdraw-password">Password</label>

              <input
                type="password"
                name="password"
                className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                autoComplete="current-password"
                disabled={loading}
                required
              />
              {formik.errors.password && formik.touched.password && <div style={{ color: "red" }}>{formik.errors.password}</div>}
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <button
              type="submit"
              disabled={loading || !formik.values.walletAddress || Number(formik.values.walletAddress) <= 0 || !formik.values.password}
              className="mt-4 px-4 py-2 bg-green-900 hover:bg-green-800 font-semibold tracking-wide text-white rounded-lg cursor-pointer"
            >
              {loading ? "Processing..." : "Withdraw"}
            </button>
          </form>
        </div>
      </div>

      <div className="mt-2 p-4 border border-yellow-500 bg-yellow-50 text-yellow-500 rounded-xl text-sm">
        <strong>Notice</strong> : Withdrawals may take up to few minutes to process. Ensure your wallet address is correct to avoid loss of funds. <br />
        <strong className="text-red-500 font-black  ">Incorrect Details are not refundable.</strong>
      </div>
    </div>
  );
};

export default Withdraw;
