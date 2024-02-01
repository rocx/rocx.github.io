# Admittedly this is more of my fault since I need to configure
# Emacs to NOT pollute my working directories with backup files.

task :clean do
  emacs_backup_files = Dir.glob("**/*~").each

  unless emacs_backup_files.size.zero?
    emacs_backup_files { |backup_file| File.delete backup_file }
  else
    abort "No backup files to delete"
  end
end
