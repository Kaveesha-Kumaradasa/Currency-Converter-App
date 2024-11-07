import { StyleSheet } from 'react-native';

// Dark Mode Styles
export const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'left',
    marginBottom: 60,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    color: '#fff',
    fontSize: 18,
  },
  input: {
    backgroundColor: '#1f1f1f',
    color: '#fff',
    fontSize: 20,
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  error: {
    color: '#ff5252',
    fontSize: 16,
    marginBottom: 10,
  },
  pickerContainer: {
    backgroundColor: '#1f1f1f',
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333',
    overflow: 'hidden',
  },
  picker: {
    color: '#fff',
  },
  arrowContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  arrow: {
    color: '#fff',
    fontSize: 24,
  },
  result: {
    color: '#fff',
    fontSize: 26,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 30,
  },
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

});

// Light Mode Styles
export const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 24,
    justifyContent: 'center',
  },
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  welcomeText: {
    color: '#212529',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  header: {
    color: '#212529',
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'left',
    marginBottom: 60,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    color: '#212529',
    fontSize: 18,
  },
  input: {
    backgroundColor: '#fff',
    color: '#212529',
    fontSize: 20,
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  error: {
    color: '#ff5252',
    fontSize: 16,
    marginBottom: 10,
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    overflow: 'hidden',
  },
  picker: {
    color: '#212529',
  },
  arrowContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  arrow: {
    color: '#212529',
    fontSize: 24,
  },
  result: {
    color: '#212529',
    fontSize: 26,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 30,
  },
  
});
