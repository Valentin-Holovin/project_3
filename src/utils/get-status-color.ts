export const getStatusColor = (statusColor: number | null | undefined) => {
  switch (statusColor) {
    case 1: {
      return '#E80025';
    }
    case 2: {
      return '#149939';
    }
    case 3: {
      return '#FBE000';
    }
    case 4: {
      return '#E5580A';
    }
    case 5: {
      return '#141A66';
    }
    case 6: {
      return '#650B78';
    }
    case 7: {
      return '#CCCCCC';
    }
    case 8: {
      return '#303030';
    }
    default:
      break;
  }
};
