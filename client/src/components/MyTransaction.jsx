import UseGetGuestPayment from "../hooks/payment/UseGetGuestPayment";
import Loading from "./Loading";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, CreditCard, Receipt, CheckCircle, Clock, XCircle } from "lucide-react";

const highlight = "bg-pink text-white";

// Helper function to format date
const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Helper function to get status info
const getStatusInfo = (status) => {
  const statusConfig = {
    pending: { 
      icon: Clock, 
      text: 'Pending', 
      color: 'text-yellow-600 bg-yellow-50 border-yellow-200' 
    },
    confirmed: { 
      icon: CheckCircle, 
      text: 'In Progress', 
      color: 'text-blue-600 bg-blue-50 border-blue-200' 
    },
    success: { 
      icon: CheckCircle, 
      text: 'Completed', 
      color: 'text-green-600 bg-green-50 border-green-200' 
    }
  };
  return statusConfig[status] || statusConfig.pending;
};

export default function MyTransaction() {
  const { payment, handleSelectStatus, status } = UseGetGuestPayment();

  // Check if payment list is empty
  const isEmpty = payment && payment.length === 0;

  return (
    <div className="sm:mx-0 mx-5 sm:mt-0 mt-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-bold text-2xl sm:text-3xl">My Transactions</h1>
        {payment && payment.length > 0 && (
          <span className="text-sm text-gray-500">
            {payment.length} transaction{payment.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      {/* Status Filter Tabs */}
      <div className="flex shadow-xl mt-10 py-2 justify-evenly rounded-xl overflow-hidden bg-white">
        <button
          onClick={() => handleSelectStatus("pending")}
          className={`rounded-lg transition duration-300 sm:px-10 px-2 py-2 hover:cursor-pointer hover:bg-gray-50 ${
            status === "pending" ? highlight : undefined
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => handleSelectStatus("confirmed")}
          className={`rounded-lg transition duration-300 sm:px-10 px-2 py-2 hover:cursor-pointer hover:bg-gray-50 ${
            status === "confirmed" ? highlight : undefined
          }`}
        >
          In Progress
        </button>
        <button
          onClick={() => handleSelectStatus("success")}
          className={`rounded-lg transition duration-300 sm:px-10 px-2 py-2 hover:cursor-pointer hover:bg-gray-50 ${
            status === "success" ? highlight : undefined
          }`}
        >
          Completed
        </button>
      </div>

      {/* Content Area */}
      <div className="max-h-[800px] overflow-y-auto mt-10 pr-2">
        {/* Loading State */}
        {!payment && (
          <div className="flex justify-center py-8">
            <Loading />
          </div>
        )}

        {/* Empty State */}
        {isEmpty && (
          <div className="text-center py-12">
            <Receipt className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              No {status} transactions
            </h3>
            <p className="text-gray-500">
              Your {status} transactions will appear here.
            </p>
          </div>
        )}

        {/* Transaction Items */}
        <AnimatePresence mode="wait">
          <div className="grid gap-4">
            {payment && payment.length > 0 &&
              payment.map((item, index) => {
                const statusInfo = getStatusInfo(status);
                const StatusIcon = statusInfo.icon;
                
                return (
                  <motion.div
                    key={item._id || index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 overflow-y-scroll"
                  >
                    {/* Status indicator bar */}
                    <div className={`h-1 ${
                      status === 'success' ? 'bg-green-500' : 
                      status === 'confirmed' ? 'bg-blue-500' : 'bg-yellow-500'
                    }`} />
                    
                    <div className="p-5">
                      {/* Header with status badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Receipt className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-500">
                            Transaction ID: <span className="font-mono text-gray-700">{item._id.slice(-6)}</span>
                          </span>
                        </div>
                        <div className={`flex items-center gap-1 px-3 py-1 rounded-full border text-xs font-medium ${statusInfo.color}`}>
                          <StatusIcon className="w-3 h-3" />
                          {statusInfo.text}
                        </div>
                      </div>

                      {/* Main content */}
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1 space-y-3">
                          {/* Title */}
                          <h2 className="text-xl font-semibold text-gray-900 line-clamp-2">
                            {item.bookingId?.listingId?.title || 'Transaction Item'}
                          </h2>

                          {/* Transaction details */}
                          <div className="space-y-2">
                            {/* Date */}
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Calendar className="w-4 h-4" />
                              <span>Paid on {formatDate(item.createdAt || item.paidAt)}</span>
                            </div>

                            {/* Payment method */}
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <CreditCard className="w-4 h-4" />
                              <span>Payment Method: {item.paymentMethod}</span>
                            </div>
                          </div>
                        </div>

                        {/* Price section */}
                        <div className="text-right">
                          <p className="text-2xl font-bold text-green-600">
                            Rp {(item.totalAmount || item.amount ).toLocaleString("id-ID")}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">Total paid</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}